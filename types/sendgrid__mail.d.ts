declare module '@sendgrid/mail' {
  export interface MailDataRequired {
    to: string;
    from: string;
    subject: string;
    text?: string;
    html?: string;
  }

  const sgMail: {
    setApiKey(apiKey: string): void;
    send(data: MailDataRequired): Promise<[any, any]>;
  };

  export default sgMail;
}
