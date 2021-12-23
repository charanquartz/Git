<query name="createOrder">
           <retrieve>
               <statement>
                   SELECT orderNumber as onum, customerNumber as cnum from Orders
                   WHERE orderNumber=10100</statement>
           </retrieve>
           <create>
               <statement>INSERT into Orders (orderNumber,orderDate, requiredDate, status,customerNumber)
                   VALUES ({onum}, Now(), Now(), 'In Process', {cnum})
               </statement>
           </create>
       </query>