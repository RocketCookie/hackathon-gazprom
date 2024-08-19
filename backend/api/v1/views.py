from rest_framework.generics import ListAPIView

from api.v1.serializers import (
    PlatformSerializer,
    ProductSerializer,
    ServiceSerializer,
    TeamSerializer,
)
from leadership.models import LeaderPlatform, LeaderProduct, LeaderService
from platforms.models import Platform, Product, Service
from teams.models import Team


class PlatformListView(ListAPIView):
    queryset = Platform.objects.all()
    serializer_class = PlatformSerializer


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class ServiceListView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class TeamListView(ListAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
