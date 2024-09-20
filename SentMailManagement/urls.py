from django.urls import path, re_path
from Router.models import SharedAPIRootRouter
from .views import *

urlpatterns = [
    path('SystemMailTarget/HRAccount_by_Organization/', HRAccount_by_OrganizationView, name='HRAccount_by_OrganizationView'),
]

from .TNVurls import urlpatterns as Turlpatterns
urlpatterns.extend(Turlpatterns)
from .TNVapi_routers import *
                        

from .TNVurls import urlpatterns as Turlpatterns
urlpatterns.extend(Turlpatterns)
from .TNVapi_routers import *
                        

from .TNVurls import urlpatterns as Turlpatterns
urlpatterns.extend(Turlpatterns)
from .TNVapi_routers import *
                        