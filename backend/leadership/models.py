from django.contrib.auth import get_user_model
from django.db import models

from platforms.models import Platform, Product, Service

User = get_user_model()


class LeaderPlatform(models.Model):
    platform = models.ForeignKey(Platform, on_delete=models.CASCADE)
    employee = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Leader {self.employee} for Platform {self.platform}"


class LeaderProduct(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    employee = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Leader {self.employee} for Product {self.product}"


class LeaderService(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    employee = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Leader {self.employee} for Service {self.service}"
