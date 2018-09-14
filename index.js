exports.handler = async (event) => {
    // TODO implement
    
    var AWS = require('aws-sdk');

    // EC2のアクセス権限を持っているユーザ
    var accessKey = 'XXX';
    var secretAccessKey = 'XXX';
    
    // 未稼働のEC2確認
    var target_instance = 'xxx';

    var ec2 = new AWS.EC2({
        accessKeyId: accessKey,
        secretAccessKey: secretAccessKey
    });
    var params = {
        // 起動対象のEC2のインスタンスID
        InstanceIds: [target_instance]
    };

    ec2.startInstances(params, function(err, data){
        if (err) {
            context.done('error', err);
        } else {
            context.succeed('handler complete');
        }
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    };
    return response;
};