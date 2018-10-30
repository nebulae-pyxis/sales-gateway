#!/bin/bash
export DOCKERHUB_IMAGE=salesgateway
export DOCKERHUB_TAG=1.0.6

rm -rf deployment/docker/sales-gateway/
cp -R $API_SHELL_PATH/sales-gateway deployment/docker/sales-gateway

ls deployment/docker/
echo "- List files"
ls deployment/docker/sales-gateway
echo "- List files graphql"
ls deployment/docker/sales-gateway/graphql
echo "- List files user-management"
ls deployment/docker/sales-gateway/graphql/user-management
echo "- cat schema gql"
cat deployment/docker/sales-gateway/graphql/user-management/schema.gql

docker build  -t $DOCKERHUB_NAMESPACE/$DOCKERHUB_IMAGE:$DOCKERHUB_TAG -t $DOCKERHUB_NAMESPACE/$DOCKERHUB_IMAGE:latest deployment/docker/
docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASS
docker push $DOCKERHUB_NAMESPACE/$DOCKERHUB_IMAGE:$DOCKERHUB_TAG
docker push $DOCKERHUB_NAMESPACE/$DOCKERHUB_IMAGE:latest