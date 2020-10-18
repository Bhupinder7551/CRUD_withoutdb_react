import React, { Component } from "react";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                { name: "Bhupinder", email: "bhupindersingh7551@gmail.com", role: "Creative", team: "Admin", address: "pakuranga", id: "1" },
                { name: "Jackson", email: "Jackson123@gmail.com", role: "Management", team: "Employee", address: "Ellerslie", id: "2" }
            ],
            detailId: '',
            detailname: '',
            detailrole: '',
            detailemail: '',
            detailaddress: '',
            detailteam: '',
            name: "",
            email: "",
            role: "",
            address: "",
            team: "",
            updateText: "",
            updateemail: "",
            updaterole: "",
            updateaddress: "",
            updateteam: "",
            showCreateEmployee: false,
            showDetail: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateChange = this.updateChange.bind(this);
        this.displayCreateEmployee = this.displayCreateEmployee.bind(this);
        this.closeUpdateModel = this.closeUpdateModel.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.closeDetail = this.closeDetail.bind(this);
    }

    showDetail(id, name, role, team, address, email) {
        this.setState({ showDetail: true });
        this.setState({
            detailID: id,
            detailname: name,
            detailrole: role,
            detailemail: email,
            detailaddress: address,
            detailteam: team,




        });
    }
    closeDetail() {
        this.setState({ showDetail: false });
    }
    displayCreateEmployee() {
        this.setState({ showCreateEmployee: true });


    }

    closeUpdateModel(e) {
        e.preventDefault();
        this.setState({ showCreateEmployee: false });

    }
    delete(e) {
        this.state.items.splice(this.state.items.indexOf(e), 1);
        this.setState({ items: this.state.items });
    }
    updateChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    edit(e) {
        e.showHide = true;
        this.setState(e);
        console.log("edit___", e);
    }
    save(e) {
        const updateItem = {
            name: this.state.updateText ? this.state.updateText : e.name,
            email: this.state.updateemail ? this.state.updateemail : e.email,
            role: this.state.updaterole ? this.state.updaterole : e.role,
            address: this.state.updateaddress ? this.state.updateaddress : e.address,
            team: this.state.updateteam ? this.state.updateteam : e.team,
            id: Date.now()
        };
        this.state.items.splice(this.state.items.indexOf(e), 1, updateItem);
        this.setState({ items: this.state.items });
        console.log("great", this.state.items);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,

        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.name.length) {
            return;
        }
        const newItem = {
            name: this.state.name,
            email: this.state.email,
            role: this.state.role,
            address: this.state.address,
            team: this.state.team,
            id: Date.now()
        };
        this.state.items.unshift(newItem);
        this.setState({ items: this.state.items });
    }

    render() {

        return (

            <div class="container">
                <div style={{ marginTop: "20%" }} class="row">
                    <div class="col">

                        <h1><b>AFFINITY ID</b></h1>

                        <input style={{ width: "100%" }} class="form-control" type="text" placeholder="Search" aria-label="Search" />

                        {this.state.items.map((item, index) => (
                            <div onClick={this.showDetail.bind(this, item.id, item.name, item.role, item.team, item.address, item.email)} style={{ marginBottom: "20px" }} key={item.id + index} class="card w-100">
                                <div class="card-body">
                                    <h5 class="card-title"> {item.name}</h5>
                                    <p class="card-text">{item.role}</p>
                                    <p class="card-text">{item.team}</p>
                             

                                </div>
                            </div>
                        ))}
                    </div>
                    <div class="col">
                        <button type="button" onClick={this.displayCreateEmployee} class="btn-dark btn-lg">CREATE A NEW EMPLOYEE</button>
                        {this.state.showDetail ?
                            <div>

                              
                                  <div style={{ marginTop: "20px" }} class="card w-100">
                                    <div class="card-body">
                                    
                                        <ul class="list-group list-group-flush">

                                            <li class="list-group-item"><b>Name:</b> {this.state.detailname}</li>
                                            <li class="list-group-item"><b>Address:</b> {this.state.detailaddress}</li>
                                            <li class="list-group-item"><b>Email:</b> {this.state.detailemail}</li>
                                            <li class="list-group-item"><b>Role:</b> {this.state.detailrole}</li>
                                            <li class="list-group-item"><b>Team:</b> {this.state.detailteam}</li>
                                            
                                                    </ul>
                                                       
                                        

                                            </div>
                                        </div>
                                  
                                
                            </div> : ""}
                        {this.state.showCreateEmployee ?
                            <div style={{ marginTop: "20px" }} class="card w-75">
                                <div class="card-body">
                                    <form onSubmit={this.handleSubmit}>


                                        <div class="form-group">
                                            <label >Name</label>


                                            <input style={{ width: "100%" }} type="text"
                                                value={this.state.name}
                                                name="name"
                                                placeholder="Enter Name"
                                                onChange={this.handleChange} class="form-control" id="formGroupExampleInput" placeholder="Name" />

                                        </div>
                                        <div class="form-group">
                                            <label >Email address</label>
                                            <input type="email" value={this.state.email}
                                                name="email" class="form-control"
                                                onChange={this.handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label >Address</label>
                                            <input style={{ width: "100%" }} type="text" value={this.state.address}
                                                name="address" class="form-control"
                                                onChange={this.handleChange} placeholder="Enter Address" />
                                        </div>

                                        <label>Role</label>
                                        <select name="role" onChange={this.handleChange} class="form-control form-control-lg">

                                            <option value="Admin">Admin</option>
                                            <option value="Employee">Employee</option>

                                        </select>
                                        <label>Team</label>
                                        <select name="team" onChange={this.handleChange} class="form-control form-control-lg">

                                            <option value="Creative">Creative</option>
                                            <option value="Management">Management</option>
                                            <option value="Finance&Admin">Finance&Admin</option>

                                        </select>


                                        <button type="submit" class="btn btn-primary">Save</button>
                                        <button onClick={this.closeUpdateModel} class="btn btn-primary">close</button>
                                    </form>
                                </div>
                            </div>


                            : ''}
                       
                            

                    </div>
                    <table style={{ marginTop: "20px" }} class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Address</th>
                                <th scope="col">Team</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.items.map((item, index) => (




                                <tr key={item.id + index}>
                                    <td className={item.showHide ? "hidden" : ""}> {item.name} </td>
                                    <td className={item.showHide ? "hidden" : ""}> {item.email} </td>
                                    <td className={item.showHide ? "hidden" : ""}> {item.address} </td>
                                    <td className={item.showHide ? "hidden" : ""}> {item.role} </td>
                                    <td className={item.showHide ? "hidden" : ""}> {item.team} </td>
                                    <td className={item.showHide ? "" : "hidden"}>

                                        <input
                                            class="form-control"
                                            type="text"
                                            name="updateText"

                                            onChange={this.updateChange}
                                            defaultValue={item.name}
                                        />
                                    </td> <td className={item.showHide ? "" : "hidden"}>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="updateemail"
                                            onChange={this.updateChange}
                                            defaultValue={item.email}
                                        />
                                    </td>

                                    <td className={item.showHide ? "" : "hidden"}>

                                     
                                        <select name="updaterole" onChange={this.updateChange} defaultValue={item.role} class="form-control form-control-lg">

                                            <option value="Creative">Creative</option>
                                            <option value="Management">Management</option>
                                            <option value="Finance&Admin">Finance&Admin</option>

                                        </select>
                                    </td>
                                    <td className={item.showHide ? "" : "hidden"}>
                                        <input
                                            class="form-control"
                                            type="text"
                                            name="updateaddress"
                                            onChange={this.updateChange}
                                            defaultValue={item.address}
                                        />
                                    </td>
                                    <td className={item.showHide ? "" : "hidden"}>

                                        <select name="updateteam"
                                            onChange={this.updateChange}
                                            defaultValue={item.team} class="form-control form-control-lg" id="team">
                                            <option value="Admin">Admin</option>
                                            <option value="Employee">Employee</option>
                                        </select>
                                    </td>
                                    <td>

                                        <button
                                            className={item.showHide ? "hidden" : "btn save-btn"}
                                            onClick={() => this.edit(item)}
                                        >
                                            Edit
                                </button>

                                        <button
                                            className={item.showHide ? "btn save-btn" : "hidden"}
                                            onClick={() => this.save(item)}
                                        >
                                            Update
                                </button>
                                        <button
                                            className="btn del-btn"
                                            onClick={() => this.delete(item)}
                                        >
                                            Delete
                                </button>
                                    </td>
                                </tr>
                            ))}


                        </tbody>
                    </table>
                </div>




            </div>

        );
    }

}

export default App;
