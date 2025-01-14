from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in business_centre_app/__init__.py
from business_centre_app import __version__ as version

setup(
	name="business_centre_app",
	version=version,
	description="This is application for realstate",
	author="Safdar Ali",
	author_email="safdar211@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
