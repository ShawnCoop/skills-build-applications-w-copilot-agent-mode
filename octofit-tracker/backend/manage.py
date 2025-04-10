#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "octofit_tracker.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    # Check for custom port argument
    if len(sys.argv) > 1 and sys.argv[1] == 'runserver':
        if len(sys.argv) == 2:
            sys.argv.append('0.0.0.0:8000')  # Default to 8000 if no port is specified
        elif ':' not in sys.argv[2]:
            sys.argv[2] = f'0.0.0.0:{sys.argv[2]}'  # Add host if only port is provided

    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
