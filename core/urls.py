from django.urls import path
from .views import home, contato_novo, candidato_novo, login

urlpatterns =[
    path('', home, name='core_home'),
    path('contato-novo', contato_novo, name='core_contato_novo'),
    path('candidato-novo', candidato_novo, name='core_candidato_novo'),
    path('login', login, name='core_login' )
]