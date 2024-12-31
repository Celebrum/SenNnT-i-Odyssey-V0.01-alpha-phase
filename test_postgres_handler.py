import unittest
from mindsdb.integrations.handlers.postgres_handler.postgres_handler import PostgresHandler
from mindsdb.api.executor.data_types.response_type import RESPONSE_TYPE


class PostgresHandlerTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.kwargs = {
            "host": "localhost",
            "port": 5432,
            "user": "postgres",
            "password": "example",
            "database": "senNnT-i"
        }
        cls.handler = PostgresHandler('test_postgres_handler', connection_data=cls.kwargs)

    def test_0_connect(self):
        self.handler.connect()

    def test_1_drop_table(self):
        res = self.handler.query("DROP TABLE IF EXISTS test;")
        assert res.type is not RESPONSE_TYPE.ERROR

    def test_2_create_table(self):
        res = self.handler.query("CREATE TABLE IF NOT EXISTS test (col_one INT, col_two INT, col_three FLOAT, col_four VARCHAR(20));")
        assert res.type is not RESPONSE_TYPE.ERROR
    
    def test_3_insert(self):
        res = self.handler.query("INSERT INTO test (col_one, col_two, col_three, col_four) VALUES (1, -1, 0.1, 'A');")
        assert res.type is not RESPONSE_TYPE.ERROR
    
    def test_4_get_tables(self):
        tables = self.handler.get_tables()
        assert tables.type is RESPONSE_TYPE.TABLE

    def test_5_select_query(self):
        query = "SELECT * FROM test;"
        result = self.handler.native_query(query)
        assert result.type is RESPONSE_TYPE.TABLE

    def test_6_check_connection(self):
        self.handler.check_connection()

        
if __name__ == '__main__':
    unittest.main()
