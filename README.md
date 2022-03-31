# NodeJs task by Infoware


# Technologies:
- <a href="https://nodejs.org/en/" target="_blank">Nodejs</a>
- <a href="https://expressjs.com/" target="_blank">Express</a>
- <a href="https://www.mongodb.com/" target="_blank">MongoDB(Database)</a>
 
## Base Route: /api/v1

# Features

 <table>
        <thead>
            <tr>
                <th>Function</th>
                <th>Description</th>
                <th>Route</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    Login or Signup
                </td>
                <td>User can login through email.</td>
                <td>/user/login</td>
            </tr>
            <tr>
                <td>
                    Logout
                </td>
                <td>User can logout and cookie will be deleted</td>
                <td>/user/Logout</td>
            </tr>
            <tr>
                <td>User Profile</td>
                <td>Logedin user can see his/her profile.
                </td>
                <td>/user/profile/me</td>
            </tr>
            <tr>
                <td>Delete Account</td>
                <td>This will delete the user profile.
                </td>
                <td>/user/delete/profile</td>
            </tr>
            <tr>
                <td>View All Products</td>
                <td>This will all available products.
                </td>
                <td>/product/all</td>
            </tr>
            <tr>
                <td>Buy Products</td>
                <td>Loged in User can buy Product.
                </td>
                <td>/product/buy/:id</td>
            </tr>
            <tr>
                <td>View User Orders</td>
                <td>Loged in User can View thier past orders.
                </td>
                <td>/order/my</td>
            </tr>
            <tr>
                <td>Add Product (Admin Access)</td>
                <td>Admin can add new product.
                </td>
                <td>/product/add</td>
            </tr>
            <tr>
                <td>Add Exsisting Product (Admin Access)</td>
                <td>Admin can add exsisting product.
                </td>
                <td>/product/add/:id</td>
            </tr>
            <tr>
                <td>View All Orders (Admin Access)</td>
                <td>Admin can View All Orders.
                </td>
                <td>/order/all</td>
            </tr>
            <tr>
                <td>View Order by Order Id (Admin Access)</td>
                <td>Admin can view Order By Order Id.
                </td>
                <td>/order/:id</td>
            </tr>
            <tr>
                <td>View Order by User Id (Admin Access)</td>
                <td>Admin can view Order By User Id.
                </td>
                <td>/order/user/:id</td>
            </tr>
        </tbody>
    </table>

# Installation

<ul>
        <li>Fork/clone this project to your local machine.</li>
        <li>Open this folder with any code editor.</li>
        <li>And run below code in terminal.</li>
        <code>npm install</code>
        <li>To run this website run following command in terminal.</li>
        <code>node ./server.js</code>
    </ul>
