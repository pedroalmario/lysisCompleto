let SimpleEmail = email = new SimpleEmail();
email.setHostName(""); // o servidor SMTP para envio do e-mail
email.addTo("", ""); //destinatário
email.setFrom("", ""); // remetente
email.setSubject(""); // assunto do e-mail
email.setMsg(""); //conteudo do e-mail
email.send(); //envia o e-mail
