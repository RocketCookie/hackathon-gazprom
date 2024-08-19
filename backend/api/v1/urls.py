from django.urls import include, path

from api.v1.views import (
    PlatformListView,
    ProductListView,
    ServiceListView,
    TeamListView,
)

urlpatterns = [
    path("platforms/", PlatformListView.as_view(), name="platform-list"),
    path("products/", ProductListView.as_view(), name="product-list"),
    path("services/", ServiceListView.as_view(), name="service-list"),
    path("teams/", TeamListView.as_view(), name="team-list"),
]

urlpatterns += [
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.authtoken")),
]
