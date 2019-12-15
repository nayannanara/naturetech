from django.contrib import admin

from .models import(
    Contato,
    Candidato
)

class ContatoAdmin(admin.ModelAdmin):
    search_fields = ('nome', 'desc_empresa', 'email')
    list_display = ('nome', 'desc_empresa', 'email')

class CandidatoAdmin(admin.ModelAdmin):
    search_fields = ('nome', 'matricula', 'desc_curso', 'arquivo')
    list_display = ('nome', 'matricula', 'desc_curso', 'arquivo')

admin.site.register(Contato, ContatoAdmin)
admin.site.register(Candidato, CandidatoAdmin)