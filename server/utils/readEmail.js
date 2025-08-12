const Imap = require('imap');
require('dotenv').config();

const readEmail = () => {
  const imap = new Imap({
    user: process.env.SMTP_EMAIL,
    password: process.env.SMTP_PASSWORD,
    host: process.env.IMAP_HOST,
    port: Number(process.env.IMAP_PORT),
    tls: true,
    tlsOptions: {
      rejectUnauthorized: false // ❗ Only for testing, not secure for production
    }
  });

  imap.once('ready', function () {
    imap.openBox('INBOX', true, function (err, box) {
      if (err) throw err;

      if (box.messages.total === 0) {
        console.log('No messages in inbox.');
        imap.end();
        return;
      }

      const fetchRange = `1:${box.messages.total}`;
      const fetch = imap.seq.fetch(fetchRange, {
        bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
        struct: true
      });

      fetch.on('message', function (msg, seqno) {
        console.log('Message #%d', seqno);
        msg.on('body', function (stream) {
          let buffer = '';
          stream.on('data', function (chunk) {
            buffer += chunk.toString('utf8');
          });
          stream.once('end', function () {
            console.log('Parsed header:', buffer);
          });
        });
      });

      fetch.once('end', function () {
        console.log('Done fetching emails.');
        imap.end();
      });
    });
  });

  imap.once('error', function (err) {
    console.error('IMAP Error:', err);
  });

  imap.once('end', function () {
    console.log('Connection ended');
  });

  imap.connect();
};

module.exports = readEmail;
