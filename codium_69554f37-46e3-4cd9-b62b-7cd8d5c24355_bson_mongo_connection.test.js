

const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("SenNnT-i");
        const collection = db.collection("mindsdb");

        const brainNetworksData = {
            networks: [
                {
                    network_name: "bridge",
                    driver: "bridge",
                    gateway: "172.17.0.1",
                    subnet: "172.17.0.0/16",
                    connected_containers: 5,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "algorithm_builder",
                    driver: "bridge",
                    gateway: "172.23.0.1",
                    subnet: "172.23.0.0/16",
                    connected_containers: 6,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "arachnoid_mater_network",
                    driver: "bridge",
                    gateway: "192.168.208.1",
                    subnet: "192.168.208.0/20",
                    connected_containers: 4,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "frontal_lobe_network",
                    driver: "bridge",
                    gateway: "172.29.0.1",
                    subnet: "172.29.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "temporal_lobe_network",
                    driver: "bridge",
                    gateway: "172.28.0.1",
                    subnet: "172.28.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "cerebrum_network",
                    driver: "bridge",
                    gateway: "172.18.0.1",
                    subnet: "172.18.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "brainstem_network",
                    driver: "bridge",
                    gateway: "192.168.112.1",
                    subnet: "192.168.112.0/20",
                    connected_containers: 5,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "cerebellum_network",
                    driver: "bridge",
                    gateway: "192.168.128.1",
                    subnet: "192.168.128.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "hypothalamus_network",
                    driver: "bridge",
                    gateway: "192.168.16.1",
                    subnet: "192.168.16.0/20",
                    connected_containers: 4,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "left_hemisphere_network",
                    driver: "bridge",
                    gateway: "172.21.0.1",
                    subnet: "172.21.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "right_hemisphere_network",
                    driver: "bridge",
                    gateway: "172.20.0.1",
                    subnet: "172.20.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "limbic_system_network",
                    driver: "bridge",
                    gateway: "192.168.80.1",
                    subnet: "192.168.80.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "occipital_lobe_network",
                    driver: "bridge",
                    gateway: "172.26.0.1",
                    subnet: "172.26.0.0/16",
                    connected_containers: 4,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "parietal_lobe_network",
                    driver: "bridge",
                    gateway: "172.27.0.1",
                    subnet: "172.27.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "prefrontal_cortex_network",
                    driver: "bridge",
                    gateway: "192.168.160.1",
                    subnet: "192.168.160.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "thalamus_network",
                    driver: "bridge",
                    gateway: "192.168.0.1",
                    subnet: "192.168.0.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "corpus_callosum_network",
                    driver: "bridge",
                    gateway: "172.25.0.1",
                    subnet: "172.25.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "cranial_nerves_network",
                    driver: "bridge",
                    gateway: "192.168.176.1",
                    subnet: "192.168.176.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "dura_mater_network",
                    driver: "bridge",
                    gateway: "192.168.192.1",
                    subnet: "192.168.192.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "fossae_network",
                    driver: "bridge",
                    gateway: "192.168.240.1",
                    subnet: "192.168.240.0/20",
                    connected_containers: 5,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "pineal_gland_network",
                    driver: "bridge",
                    gateway: "192.168.48.1",
                    subnet: "192.168.48.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "pituitary_gland_network",
                    driver: "bridge",
                    gateway: "192.168.32.1",
                    subnet: "192.168.32.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "sulcus_network",
                    driver: "bridge",
                    gateway: "172.31.0.1",
                    subnet: "172.31.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "weygu_nebulagraph-dd-ext-desktop-extension_nebula-net",
                    driver: "bridge",
                    gateway: "172.24.0.1",
                    subnet: "172.24.0.0/16",
                    connected_containers: 16,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "basal_ganglia_network",
                    driver: "bridge",
                    gateway: "192.168.96.1",
                    subnet: "192.168.96.0/20",
                    connected_containers: 4,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "gyrus_network",
                    driver: "bridge",
                    gateway: "172.30.0.1",
                    subnet: "172.30.0.0/16",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "hippocampus_network",
                    driver: "bridge",
                    gateway: "192.168.144.1",
                    subnet: "192.168.144.0/20",
                    connected_containers: 3,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "mochoa_pgadmin4-docker-extension-desktop-extension_default",
                    driver: "bridge",
                    gateway: "172.22.0.1",
                    subnet: "172.22.0.0/16",
                    connected_containers: 4,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "algorithmbuilder_algorithm_builder",
                    driver: "bridge",
                    gateway: "192.168.224.1",
                    subnet: "192.168.224.0/20",
                    connected_containers: 6,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                },
                {
                    network_name: "\\",  // Escaped backslash network
                    driver: "bridge",
                    gateway: "172.19.0.1",
                    subnet: "172.19.0.0/16",
                    connected_containers: 6,
                    timestamp: new Date(),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    eventTime: new Date(),
                    measurementTime: new Date(),
                    recordedAt: new Date()
                }
            ]
        };

        await collection.insertOne(brainNetworksData);
        console.log("Data inserted successfully.");
    } finally {
        await client.close();
    }
}

run().catch(console.dir);


// Generated by Qodo Gen

describe('run', () => {

    // Successfully connect to MongoDB and insert network data, allowing more time for operations to complete
    it('should successfully connect to MongoDB and insert network data with extended timeout', async () => {
        const mockInsertOne = jest.fn().mockResolvedValue({ acknowledged: true });
        const mockCollection = { insertOne: mockInsertOne };
        const mockDb = { collection: jest.fn().mockReturnValue(mockCollection) };
        const mockConnect = jest.fn();
        const mockClose = jest.fn();
        const mockClient = {
            connect: mockConnect,
            db: jest.fn().mockReturnValue(mockDb),
            close: mockClose
        };

        jest.spyOn(MongoClient, 'connect').mockResolvedValue(mockClient);

        await run();

        expect(mockConnect).toHaveBeenCalled();
        expect(mockDb.collection).toHaveBeenCalledWith('mindsdb');
        expect(mockInsertOne).toHaveBeenCalled();
        expect(mockClose).toHaveBeenCalled();
    }, 10000);
});
