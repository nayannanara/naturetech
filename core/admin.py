from django.contrib import admin

from .models import(
    Contato,
    Candidato
)

class ContatoAdmin(admin.ModelAdmin):
    search_fields = ('nome', 'email', 'telefone')
    list_display = ('nome', 'email', 'telefone')

class CandidatoAdmin(admin.ModelAdmin):
    search_fields = ('nome', 'email', 'cpf', 'arquivo')
    list_display = ('nome', 'email', 'cpf', 'arquivo')

admin.site.register(Contato, ContatoAdmin)
admin.site.register(Candidato, CandidatoAdmin)