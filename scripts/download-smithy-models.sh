git clone https://github.com/aws/aws-sdk-js-v3.git --depth=1

rm -rf aws-models
mv aws-sdk-js-v3/codegen/sdk-codegen/aws-models .

rm -rf aws-sdk-js-v3
