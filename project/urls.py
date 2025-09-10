
import os
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings

from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    # Serve React index.html for all other routes
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

# Serve static files (React assets) from dist/ during development
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=os.path.join(settings.BASE_DIR, 'dist'))
