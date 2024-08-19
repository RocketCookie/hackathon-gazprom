from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Platform(models.Model):
    name_platform = models.CharField(max_length=100)
    description_platform = models.TextField(null=True, blank=True)
    challenge_platform = models.TextField(null=True, blank=True)
    creation_date_platform = models.DateField()
    type_platform = models.IntegerField()

    def __str__(self):
        return self.name_platform


class Product(models.Model):
    name_product = models.CharField(max_length=100)
    description_product = models.TextField(null=True, blank=True)
    challenge_product = models.TextField(null=True, blank=True)
    creation_date_product = models.DateField()

    def __str__(self):
        return self.name_product


class Service(models.Model):
    name_service = models.CharField(max_length=100)
    description_service = models.TextField(null=True, blank=True)
    challenge_service = models.TextField(null=True, blank=True)
    creation_date_service = models.DateField()

    def __str__(self):
        return self.name_service


class ProductInPlatform(models.Model):
    platform = models.ForeignKey(
        Platform, on_delete=models.CASCADE, related_name="products_in_platform"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="platforms_in_product"
    )

    class Meta:
        unique_together = ("platform", "product")

    def __str__(self):
        return f"{self.product.name_product} in {self.platform.name_platform}"


class ServiceInProduct(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="services_in_product"
    )
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name="products_in_service"
    )

    class Meta:
        unique_together = ("product", "service")

    def __str__(self):
        return f"{self.service.name_service} in {self.product.name_product}"
