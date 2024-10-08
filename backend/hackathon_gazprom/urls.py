"""
URL configuration for hackathon_gazprom project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

import os

from django.contrib import admin
from django.urls import include, path, re_path
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Gazprom API",
        default_version="v1",
        description="Документация для проекта Hackathon Gazprom",
        # terms_of_service="URL страницы с пользовательским соглашением",
        contact=openapi.Contact(email="admin@gazprom.ru"),
        license=openapi.License(name="BSD 3-Clause License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
    url=os.getenv("SCHEMA_URL", "http://localhost:8000"),
)

urlpatterns = [
    path("api/v1/", include("api.v1.urls")),
    path("admin/", admin.site.urls),
    path(
        "swagger<format>/", schema_view.without_ui(cache_timeout=0), name="schema-json"
    ),
    path(
        "swagger/",
        schema_view.with_ui("swagger", cache_timeout=0),
        name="schema-swagger-ui",
    ),
    path("redoc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
]
