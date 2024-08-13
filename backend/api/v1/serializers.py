from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model


User = get_user_model()


class UserCreateSerializer(UserCreateSerializer):
    # password = serializers.CharField(write_only=True)
    # re_password = serializers.CharField(write_only=True)

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "last_name",
            "first_name",
            "surname",
            "email",
            "password",
        )
