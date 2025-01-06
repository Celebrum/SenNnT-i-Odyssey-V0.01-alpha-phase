const networksConfig = {
    networks: [
        {
            name: "algorithm_builder",
            config: {
                Name: "algorithm_builder",
                Driver: "bridge",
                IPAM: {
                    Driver: "default",
                    Options: {},
                    Config: [
                        {
                            Subnet: "172.23.0.0/16",
                            Gateway: "172.23.0.1"
                        }
                    ]
                },
                Containers: {}
            }
        },
        // Add other networks following the same pattern
    ]
};

module.exports = networksConfig;
