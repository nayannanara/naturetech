from django.db import models


class Contato(models.Model):
    nome = models.CharField('Nome', null=True, max_length=60)
    email = models.EmailField('Email', null=True, max_length=60)
    desc_empresa = models.CharField('Empresa', null=True, max_length=60)
    assunto = models.CharField('Assunto', null=True, max_length=60)
    mensagem = models.TextField()

    def __str__(self):
        return self.nome


class Candidato(models.Model):
    nome = models.CharField('Nome', null=True, max_length=60)
    matricula = models.CharField('Matricula', null=True, max_length=60)
    desc_curso = models.CharField('Curso', null=True, max_length=60)
    periodo = models.CharField('Peridodo', null=True, max_length=3)
    arquivo = models.FileField(null=True, upload_to='arquivos')

    def __str__(self):
        return self.nome