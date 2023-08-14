const { program } = require("commander");

const {
    listContacts,
    getContactById,
    addContact,
    removeContact,
} = require("./contacts")

const invokeAction = async ({action, id, name, email, phone}) => {
    switch(action) {
        case "list":
            const allContacts = await listContacts();
            return console.table(allContacts);
            break;        
        case "get":
            const oneContacts = await getContactById(id);
            return console.log(oneContacts);
            break;
        case "remove":
            const deleteContacts = await removeContact(id);
            return console.log(deleteContacts);     
            break;
        case "add":
            const newContacts = await addContact({ name, email, phone });
            return console.log(newContacts);
            break;
        default:
            console.warn("\x1B[31m Unknown action type!")
    }
}

program
    .option("-a, --action, <type>")
    .option("-i, --id, <type>")
    .option("-n, --name, <type>")
    .option("-e, --email, <type>")
    .option("-p, --phone, <type>")

program.parse();
const options = program.opts();
invokeAction(options)    

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({ action: "remove", id: "MB9NAOPyzFsCYoRyXC9GD" });
// invokeAction({ action: "add", name: "Dmytro Best", email: "db@gmail.com", phone: "(050) 887-4654"});