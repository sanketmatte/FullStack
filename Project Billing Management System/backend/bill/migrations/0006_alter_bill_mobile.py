# Generated by Django 3.2.18 on 2023-03-26 17:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('customer', '0004_alter_customer_mobile'),
        ('bill', '0005_rename_total_billitems_amount'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bill',
            name='mobile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='bills', to='customer.customer', to_field='mobile'),
        ),
    ]