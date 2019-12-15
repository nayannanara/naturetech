from django.shortcuts import render, redirect
from .models import Contato, Candidato
from django.contrib import messages


def home(request):
    return render(request, 'core/index.html')


def contato_novo(request):
    if request.method == 'POST':

            contato = {}
            contato['nome'] = request.POST.get('nome')
            contato['desc_empresa'] = request.POST.get('desc_empresa')
            contato['email'] = request.POST.get('email')
            contato['mensagem'] = request.POST.get('mensagem')
            contato['assunto'] = request.POST.get('assunto')

            Contato.objects.create(**contato)
    return redirect('core_home')



def candidato_novo(request):
    if request.method == 'POST':

            candidato = {}
            candidato['nome'] = request.POST.get('nome')
            candidato['matricula'] = request.POST.get('matricula')
            candidato['desc_curso'] = request.POST.get('desc_curso')
            candidato['periodo'] = request.POST.get('periodo')
            if request.method == 'POST':
                candidato['arquivo'] = request.FILES.get('arquivo')

            Candidato.objects.create(**candidato)

    return redirect('core_home')

def login(request):
    return redirect('admin/')