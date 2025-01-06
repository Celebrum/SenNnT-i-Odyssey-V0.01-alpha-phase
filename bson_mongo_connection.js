const { MongoClient } = require('mongodb');

async function run() {
    const uri = "mongodb://localhost:27017/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("neural_network");
        const collection = db.collection("brain_networks");

        const brainNetworksData = {
            networks: [
                { network_name: "bridge", driver: "bridge", gateway: "172.17.0.1", subnet: "172.17.0.0/16", connected_containers: 5 },
                { network_name: "algorithm_builder", driver: "bridge", gateway: "172.23.0.1", subnet: "172.23.0.0/16", connected_containers: 6 },
                { network_name: "arachnoid_mater_network", driver: "bridge", gateway: "192.168.208.1", subnet: "192.168.208.0/20", connected_containers: 4 },
                { network_name: "frontal_lobe_network", driver: "bridge", gateway: "172.29.0.1", subnet: "172.29.0.0/16", connected_containers: 3 },
                { network_name: "temporal_lobe_network", driver: "bridge", gateway: "172.28.0.1", subnet: "172.28.0.0/16", connected_containers: 3 },
                { network_name: "cerebrum_network", driver: "bridge", gateway: "172.18.0.1", subnet: "172.18.0.0/16", connected_containers: 3 },
                { network_name: "brainstem_network", driver: "bridge", gateway: "192.168.112.1", subnet: "192.168.112.0/20", connected_containers: 5 },
                { network_name: "cerebellum_network", driver: "bridge", gateway: "192.168.128.1", subnet: "192.168.128.0/20", connected_containers: 3 },
                { network_name: "hypothalamus_network", driver: "bridge", gateway: "192.168.16.1", subnet: "192.168.16.0/20", connected_containers: 4 },
                { network_name: "left_hemisphere_network", driver: "bridge", gateway: "172.21.0.1", subnet: "172.21.0.0/16", connected_containers: 3 },
                { network_name: "right_hemisphere_network", driver: "bridge", gateway: "172.20.0.1", subnet: "172.20.0.0/16", connected_containers: 3 },
                { network_name: "limbic_system_network", driver: "bridge", gateway: "192.168.80.1", subnet: "192.168.80.0/20", connected_containers: 3 },
                { network_name: "occipital_lobe_network", driver: "bridge", gateway: "172.26.0.1", subnet: "172.26.0.0/16", connected_containers: 4 },
                { network_name: "parietal_lobe_network", driver: "bridge", gateway: "172.27.0.1", subnet: "172.27.0.0/16", connected_containers: 3 },
                { network_name: "prefrontal_cortex_network", driver: "bridge", gateway: "192.168.160.1", subnet: "192.168.160.0/20", connected_containers: 3 },
                { network_name: "thalamus_network", driver: "bridge", gateway: "192.168.0.1", subnet: "192.168.0.0/20", connected_containers: 3 },
                { network_name: "corpus_callosum_network", driver: "bridge", gateway: "172.25.0.1", subnet: "172.25.0.0/16", connected_containers: 3 },
                { network_name: "cranial_nerves_network", driver: "bridge", gateway: "192.168.176.1", subnet: "192.168.176.0/20", connected_containers: 3 },
                { network_name: "dura_mater_network", driver: "bridge", gateway: "192.168.192.1", subnet: "192.168.192.0/20", connected_containers: 3 },
                { network_name: "fossae_network", driver: "bridge", gateway: "192.168.240.1", subnet: "192.168.240.0/20", connected_containers: 5 },
                { network_name: "pineal_gland_network", driver: "bridge", gateway: "192.168.48.1", subnet: "192.168.48.0/20", connected_containers: 3 },
                { network_name: "pituitary_gland_network", driver: "bridge", gateway: "192.168.32.1", subnet: "192.168.32.0/20", connected_containers: 3 },
                { network_name: "sulcus_network", driver: "bridge", gateway: "172.31.0.1", subnet: "172.31.0.0/16", connected_containers: 3 },
                { network_name: "weygu_nebulagraph-dd-ext-desktop-extension_nebula-net", driver: "bridge", gateway: "172.24.0.1", subnet: "172.24.0.0/16", connected_containers: 16 },
            ]
        };

        await collection.insertOne(brainNetworksData);
        console.log("Data inserted successfully.");
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
