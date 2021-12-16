import ControllerTest from '../../controllers/controller-test';

const ViewTest = {
    render() {
        return ControllerTest.init().users.map((item) => {
            return `
                <div class='user'>
                    <ul>
                        <li>Name: ${item.name}</li>
                        <li>Email: ${item.email}</li>
                        <li>Phone: ${item.phone}</li>
                    </ul>
                </div>
            `;
        });
    }
};

export default ViewTest;
