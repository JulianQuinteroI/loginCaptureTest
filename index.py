from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)


@app.route('/')
def funcion():
    return render_template('index.html')


@app.route('/login')
def funcion1():
    return render_template('login.html')


@app.route('/prueba', methods=['POST'])
def funcion2():
    print(request.form)
    asunto = "fijo"
    mensaje = "Se ha registrado satisfactoriamente"
    destinatario = request.form["correo"]
    enviarCorreo(asunto, mensaje, destinatario)
    return("Hola Mundo")


def enviarCorreo(asunto, mensaje, destinatario):

    mensaje = 'Subject: {}\n\n{}'.format(asunto, mensaje)

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()

    server.login('exptclase@gmail.com', 'vKSpp3yexF@M')

    server.sendmail('exptclase@gmail.com', destinatario, mensaje)

    server.quit()

    print('Correo enviado exitosamente')
