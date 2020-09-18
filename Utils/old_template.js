exports.emailBienvenidaUsuario = uid => {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
    <head style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
        <meta name="viewport" content="width=device-width" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
    
        <!-- For development, pass document through inliner -->
        <!-- <link rel="stylesheet" href="css/simple.css"> -->
    
        <style type="text/css" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
    
    * { margin: 0; padding: 0; font-size: 100%; font-family: 'Avenir Next', "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif; line-height: 1.65; }
    
    img { max-width: 100%; margin: 0 auto; display: block; }
    
    body, .body-wrap { width: 100% !important; height: 100%; background: #f8f8f8; }
    
    a { color: #753183; text-decoration: none; }
    
    a:hover { text-decoration: underline; }
    
    .text-center { text-align: center; }
    
    .text-right { text-align: right; }
    
    .text-left { text-align: left; }
    
    .button { display: inline-block; color: white; background: #753183; border: solid #753183; border-width: 10px 20px 8px; font-weight: bold; border-radius: 4px; }
    
    .button:hover { text-decoration: none; }
    
    h1, h2, h3, h4, h5, h6 { margin-bottom: 20px; line-height: 1.25; }
    
    h1 { font-size: 32px; }
    
    h2 { font-size: 28px; }
    
    h3 { font-size: 24px; }
    
    h4 { font-size: 20px; }
    
    h5 { font-size: 16px; }
    
    p, ul, ol { font-size: 16px; font-weight: normal; margin-bottom: 20px; }
    
    .container { display: block !important; clear: both !important; margin: 0 auto !important; max-width: 580px !important; }
    
    .container table { width: 100% !important; border-collapse: collapse; }
    
    .container .masthead { padding: 80px 0; background: white; color: white; }
    
    .container .masthead h1 { margin: 0 auto !important; max-width: 90%; text-transform: uppercase; }
    
    .container .content { background: white; padding: 30px 35px; }
    
    .container .content.footer { background: none; }
    
    .container .content.footer p { margin-bottom: 0; color: #888; text-align: center; font-size: 14px; }
    
    .container .content.footer a { color: #888; text-decoration: none; font-weight: bold; }
    
    .container .content.footer a:hover { text-decoration: underline; }
    
        </style>
    </head>
    <body style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;height: 100%;background: #f8f8f8;width: 100% !important;">
    <table class="body-wrap" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;height: 100%;background: #f8f8f8;width: 100% !important;">
        <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
            <td class="container" style="margin: 0 auto !important;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;display: block !important;clear: both !important;max-width: 580px !important;">
    
                <!-- Message start -->
                <table style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;border-collapse: collapse;width: 100% !important;">
                    <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                        <td align="center" class="masthead" style="margin: 0;padding: 80px 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: white;color: white;">
    
                            <img src="https://firebasestorage.googleapis.com/v0/b/itoour-v1.appspot.com/o/static%2Fitoour.png?alt=media&token=06632fa3-fbf7-43c9-944d-645f05d5c9bb" alt="itoour logo" style="margin: 0 auto;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;max-width: 100%;display: block;">
    
                        </td>
                    </tr>
                    <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                        <td class="content" style="margin: 0;padding: 30px 35px;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: white;">
    
                            <h2 style="margin: 0;padding: 0;font-size: 28px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.25;margin-bottom: 20px;">Hola!</h2>
    
                            <p style="margin: 0;padding: 0;font-size: 16px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium diam et leo cursus pharetra. Integer venenatis nisl neque, vitae mollis leo posuere sed. Suspendisse condimentum, mi et convallis cursus, justo tortor placerat justo, a imperdiet nisl metus sed ligula. Nulla sed ligula quis ipsum consequat cursus id vitae enim. Pellentesque nec quam sit amet purus sagittis ultricies. Etiam volutpat arcu in neque suscipit mollis.</p>
    
                            <table style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;border-collapse: collapse;width: 100% !important;">
                                <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                                    <td align="center" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                                        <p style="margin: 0;padding: 0;font-size: 16px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;">
                                            <a href="http://itoour.com/activar/${uid}" class="button" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: white;text-decoration: none;display: inline-block;background: #753183;border: solid #753183;border-width: 10px 20px 8px;font-weight: bold;border-radius: 4px;">Activar mi cuenta</a>
                                        </p>
                                    </td>
                                </tr>
                            </table>
    
                            <p style="margin: 0;padding: 0;font-size: 16px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;">Aenean in ullamcorper dui. Fusce sed turpis at lectus pulvinar vestibulum. <a href="http://itoour.com" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: #753183;text-decoration: none;">Página de Inicio</a>.</p>
    
                            <p style="margin: 0;padding: 0;font-size: 16px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 20px;"><em style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">– itoour</em></p>
    
                        </td>
                    </tr>
                </table>
    
            </td>
        </tr>
        <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
            <td class="container" style="margin: 0 auto !important;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;display: block !important;clear: both !important;max-width: 580px !important;">
    
                <!-- Message start -->
                <table style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;border-collapse: collapse;width: 100% !important;">
                    <tr style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;">
                        <td class="content footer" align="center" style="margin: 0;padding: 30px 35px;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;background: none;">
                            <p style="margin: 0;padding: 0;font-size: 14px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 0;color: #888;text-align: center;">Enviado por: <a href="#" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: #888;text-decoration: none;font-weight: bold;">itoour</a>, Dirección</p>
                            <p style="margin: 0;padding: 0;font-size: 14px;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;font-weight: normal;margin-bottom: 0;color: #888;text-align: center;"><a href="mailto:" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: #888;text-decoration: none;font-weight: bold;">info@itoour.com</a> | <a href="#" style="margin: 0;padding: 0;font-size: 100%;font-family: 'Avenir Next', &quot;Helvetica Neue&quot;, &quot;Helvetica&quot;, Helvetica, Arial, sans-serif;line-height: 1.65;color: #888;text-decoration: none;font-weight: bold;">web</a></p>
                        </td>
                    </tr>
                </table>
    
            </td>
        </tr>
    </table>
    </body>
    </html>`
}