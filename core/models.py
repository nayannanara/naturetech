from django.db import models


class Contato(models.Model):
    nome = models.CharField(max_length=40, null=False, blank=False, verbose_name='nome')
    email = models.EmailField(max_length=40, unique=True, null=False, blank=False, verbose_name='email')
    telefone = models.CharField(max_length=15, null=False, blank=False, verbose_name='telefone')
    mensagem = models.TextField()

    def __str__(self):
        return self.nome


class Candidato(models.Model):
    nome = models.CharField(max_length=50, null=False, blank=False, verbose_name='nome')
    email = models.EmailField(max_length=50, null=False, blank=False, verbose_name='email')
    nacionalidade = models.CharField(max_length=40, null=False, blank=False, verbose_name='nacionalidade')
    cpf = models.CharField(unique=True, max_length=15, null=True, blank=False, verbose_name='cpf')
    telefone = models.CharField(max_length=15, null=False, blank=False, verbose_name='celular', default="", editable=False)
    data_nascimento = models.DateField(auto_now=False, null=True, verbose_name='data_nascimento')
    genero = models.CharField(max_length=15, null=True, verbose_name='genero')
    estado_civil = models.CharField(max_length=15, null=True, verbose_name='estado_civil')
    deficiencia = models.CharField(max_length=5, null=True, verbose_name='deficiencia')
    tipo_deficiencia = models.CharField(max_length=15, null=True, blank=True)
    cep = models.CharField(max_length=10, null=True, blank=False, verbose_name='cep')
    logradouro = models.CharField(max_length=40, null=True, blank=False, verbose_name='rua')
    numero = models.IntegerField(null=True, verbose_name='numero')
    complemento = models.CharField(max_length=60, null=True, blank=False, verbose_name='complemento')
    bairro = models.CharField(max_length=25, blank=True, verbose_name='bairro')
    estado = models.CharField(max_length=4, null=True, verbose_name='estados')
    cidade = models.CharField(max_length=30, null=True, verbose_name='idades')
    matricula = models.CharField(max_length=20, null=True, blank=False)
    curso = models.CharField(max_length=30, null=True, blank=False, verbose_name='curso')
    periodo = models.CharField(max_length=5, null=True, blank=True, verbose_name='periodo')
    arquivo = models.FileField(null=True, upload_to='arquivos')

    def __str__(self):
        return self.nome