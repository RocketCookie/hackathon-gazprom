from django.contrib.auth import get_user_model
from djoser.serializers import UserCreateSerializer
from rest_framework import serializers

from leadership.models import LeaderPlatform, LeaderProduct, LeaderService
from platforms.models import Platform, Product, Service
from teams.models import Team

User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "last_name",
            "first_name",
            "surname",
            "email",
            "password",
        )


class PlatformSerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()

    class Meta:
        model = Platform
        fields = ["id", "name_platform", "description_platform", "product_count"]

    def get_product_count(self, obj):
        return obj.products_in_platform.count()


class ProductSerializer(serializers.ModelSerializer):
    service_count = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ["id", "name_product", "description_product", "service_count"]

    def get_service_count(self, obj):
        return obj.services_in_product.count()


class ServiceSerializer(serializers.ModelSerializer):
    team_count = serializers.SerializerMethodField()

    class Meta:
        model = Service
        fields = ["id", "name_service", "description_service", "team_count"]

    def get_team_count(self, obj):
        return obj.teams_in_service.count()


class TeamSerializer(serializers.ModelSerializer):
    employee_count = serializers.SerializerMethodField()

    class Meta:
        model = Team
        fields = ["id", "name_team", "description_team", "employee_count"]

    def get_employee_count(self, obj):
        return obj.employeeinteam_set.count()


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ["id", "name_service", "description_service"]


class ProductInPlatformSerializer(serializers.ModelSerializer):
    service_count = serializers.SerializerMethodField()
    services = ServiceSerializer(
        source="services_in_product", many=True, read_only=True
    )

    class Meta:
        model = Product
        fields = [
            "id",
            "name_product",
            "description_product",
            "service_count",
            "services",
        ]

    def get_service_count(self, obj):
        return obj.services_in_product.count()


class LeaderPlatformSerializer(serializers.ModelSerializer):
    employee_name = serializers.CharField(
        source="employee.get_full_name", read_only=True
    )

    class Meta:
        model = LeaderPlatform
        fields = ["employee", "employee_name"]


class PlatformDetailSerializer(serializers.ModelSerializer):
    products = ProductInPlatformSerializer(
        source="products_in_platform", many=True, read_only=True
    )
    leaders = LeaderPlatformSerializer(
        source="leaderplatform_set", many=True, read_only=True
    )

    class Meta:
        model = Platform
        fields = ["id", "name_platform", "description_platform", "products", "leaders"]
