from django.db import models
from django.contrib.auth.models import AbstractUser
from employees.managers import CustomUserManager


class Employee(AbstractUser):
    SEX_CHOICES = [
        ("M", "Мужчина"),
        ("F", "Женщина"),
    ]

    last_name = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    sex = models.CharField(max_length=7, choices=SEX_CHOICES, blank=True)
    date_of_birth = models.DateField(null=True, blank=True)
    phone_number = models.CharField(max_length=12, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    telegram = models.CharField(max_length=100, blank=True)
    address = models.CharField(max_length=200, blank=True)
    biography = models.TextField(blank=True)
    membership = models.BooleanField(default=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "surname"]

    objects = CustomUserManager()

    class Meta:
        verbose_name = "Employee"
        verbose_name_plural = "Employees"
        ordering = ["last_name", "first_name"]
