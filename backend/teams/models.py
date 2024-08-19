from django.contrib.auth import get_user_model
from django.db import models

from platforms.models import Service

User = get_user_model()


class Team(models.Model):
    name_team = models.CharField(max_length=100)
    description_team = models.TextField(null=True, blank=True)
    challenge_team = models.TextField(null=True, blank=True)
    creation_date_team = models.DateField()

    def __str__(self):
        return self.name_team


class TeamInService(models.Model):
    service = models.ForeignKey(
        Service, on_delete=models.CASCADE, related_name="teams_in_service"
    )
    team = models.ForeignKey(
        Team, on_delete=models.CASCADE, related_name="services_in_team"
    )

    class Meta:
        unique_together = ("service", "team")

    def __str__(self):
        return f"{self.team.name_team} in {self.service.name_service}"


class RoleInTeam(models.Model):
    role = models.CharField(max_length=8, primary_key=True, unique=True)
    team = models.ForeignKey(Team, on_delete=models.CASCADE)

    def __str__(self):
        return f"Role {self.role} in Team {self.team}"


class EmployeeInTeam(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    employee = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.ForeignKey(RoleInTeam, on_delete=models.CASCADE)

    def __str__(self):
        return f"Employee {self.employee} in Team {self.team} with Role {self.role}"
