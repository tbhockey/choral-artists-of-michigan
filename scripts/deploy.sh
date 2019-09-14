#!/bin/bash

# Run with:
# env CODE=/path/to/code/* DEPLOY_TO=user@ip:address:/var/www/racingstrats.com/html sh deploy.sh

echo -e "Deploying...\n"

scp -r $CODE $DEPLOY_TO

echo -e "\nDeploy complete."
