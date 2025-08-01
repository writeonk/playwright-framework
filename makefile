# Makefile

build:
	docker build -t playwright-tests .

test:
	docker run --rm --env-file .env playwright-tests

report:
	@echo "Generating Allure Report..."
	docker run --rm -v ${PWD}/allure-results:/app/allure-results -v ${PWD}/allure-report:/app/allure-report playwright-tests sh -c "allure generate allure-results -o allure-report --clean"

open-report:
	npx allure open allure-report