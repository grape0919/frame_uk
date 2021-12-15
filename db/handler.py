import sqlite3

import sys
import os
from typing import Dict
sys.path.append(os.path.dirname(__file__))
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))


class DBHandler():
    __con = None

    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(DBHandler, cls).__new__(cls)
        return cls.instance

    def __init__(self):
        
        if not self.__con:
            self.__con = sqlite3.connect('db/order.db', check_same_thread=False)
            cur = self.connect.cursor()

            with open("db/sql/init_db.sql") as sql_file:

                cur.executescript(sql_file.read())

                self.connect.commit()

                cur.close()
                
                
    @property
    def connect(self):
        return self.__con

    def get_order(self, id=None):
        result = []
        cur = self.connect.cursor()
        try:
            if id:
                pass
            else:
                with open("db/sql/general/select_all.sql") as sql_file: 
                    rows =  cur.execute(sql_file.read())
                    for row in rows:
                        temp = {}
                        for idx, c in enumerate(cur.description):
                            temp[c[0]] = row[idx]    
                        result.append(temp)
        except Exception as e:
            repr(e)
        
        cur.close()
        return result

    def add_order(self, input_data:Dict):
        """
        start_date, customer, product, end_date,
                  laser_stat, bending_stat, welding_stat, color
        """
        cur = self.connect.cursor()
        try:
            input = [list(input_data.values())]
            print("!@#!@# input : ", input)
            with open("db/sql/general/insert.sql") as sql_file:
                
                cur.executemany(sql_file.read(), input)
                self.connect.commit()
        
        except Exception as e :
            repr(e)
            print("!@#!@# 주문 추가중 오류 : ", e)
            
        cur.close()
        

    def update_order(self):
        pass

    def del_order(self, order_id):
        cur = self.connect.cursor()
        
        try:
            with open("db/sql/general/delete.sql") as sql_file:
                delete_sql = sql_file.read() % order_id
                cur.execute(delete_sql)
                self.connect.commit()
        
        except Exception as e :
            repr(e)
            print("!@#!@# 주문 삭제중 오류 : ", e)
        
        cur.close()
    
    
    def __del__(self):
        print("!@#!@# deletion db")
        self.connect.close()


if __name__ == "__main__":
    db_handler = DBHandler()
