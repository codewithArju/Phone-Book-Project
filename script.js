//
//];
  
//function clickMe(){



//let t1Tag=document.createElement("table");
//theadName.className="Main";
  
//let theadName=document.createElement("tableHead");
//theadName.className="Main";

//let theadNme=document.createElement("tableRow");
//theadName.className="Sub";
////// Colums //////
//let tableHeadName=document.createElement("tableHead");
//tableHeadName.className="tableHeadclass";
//tableHeadName.innerText="Name";
 
//let tableHeadName=document.createElement("tableHead");
//tableHeadName.className="tableHeadclass";
//tableHeadName.innerText="Phone-Number";

//let tableHeadName=document.createElement("tableHead");
//tableHeadName.className="tableHeadclass";
//tableHeadName.innerText="Address";

//let tableHeadName=document.createElement("tableHead");
//tableHeadName.className="tableHeadclass";
//tableHeadName.innerText="Email";

//theadName.append(thName,thPhoneNumber,thAddress,thEmail);
//creating Table body///////----
//let tbody = document.createElement("tbody");
  //indianDummyArray.forEach(person => {
//    let row = document.createElement("tr");
    // Creating table data cells
//    let nameCell = document.createElement("td");
 //   nameCell.innerText = person.name;

//    let phoneNumberCell = document.createElement("td");
//    phoneNumberCell.innerText = person.phoneNumber;

//    let addressCell = document.createElement("td");
//    addressCell.innerText = person.address;

//    let emailCell = document.createElement("td");
//    emailCell.innerText = person.email;

    // Appending cells to the row
//    row.appendChild(nameCell);
//    row.appendChild(phoneNumberCell);
//    row.appendChild(addressCell);
//    row.appendChild(emailCell);

//    tbody.appendChild(row);
//  });
//  document.body.appendChild(table);
//  clickMe();
//////////----//////////
const indianDummyArray = [
  {
    name: 'Amit Kumar',
    phoneNumber: '9876543210',
    address: '123 Street, Mumbai, Maharashtra',
    email: 'amit.kumar@example.com',
  },
  {
    name: 'Priya Singh',
    phoneNumber: '8765432109',
    address: '456 Street, Delhi, Delhi',
    email: 'priya.singh@example.com',
  },
  {
    name: 'Rahul Sharma',
    phoneNumber: '7654321098',
    address: '789 Street, Bangalore, Karnataka',
    email: 'rahul.sharma@example.com',
  },
  {
    name: 'Pooja Patel',
    phoneNumber: '6543210987',
    address: '101 Street, Ahmedabad, Gujarat',
    email: 'pooja.patel@example.com',
  },
  {
    name: 'Deepak Verma',
    phoneNumber: '5432109876',
    address: '202 Street, Chennai, Tamil Nadu',
    email: 'deepak.verma@example.com',
  },
  {
    name: 'Anjali Yadav',
    phoneNumber: '4321098765',
    address: '303 Street, Kolkata, West Bengal',
    email: 'anjali.yadav@example.com',
  },
  {
    name: 'Rajat Kapoor',
    phoneNumber: '8765432101',
    address: '404 Street, Hyderabad, Telangana',
    email: 'rajat.kapoor@example.com',
  },
  {
    name: 'Kavita Gupta',
    phoneNumber: '7654321092',
    address: '505 Street, Pune, Maharashtra',
    email: 'kavita.gupta@example.com',
  },
  {
    name: 'Suresh Nair',
    phoneNumber: '6543210983',
    address: '606 Street, Jaipur, Rajasthan',
    email: 'suresh.nair@example.com',
  },
  {
    name: 'Anita Reddy',
    phoneNumber: '5432109874',
    address: '707 Street, Lucknow, Uttar Pradesh',
    email: 'anita.reddy@example.com',
  },
  {
    name: 'Vikram Singh',
    phoneNumber: '9876543211',
    address: '808 Street, Chandigarh, Punjab',
    email: 'vikram.singh@example.com',
  },
  {
    name: 'Rashmi Tiwari',
    phoneNumber: '8765432102',
    address: '909 Street, Bhopal, Madhya Pradesh',
    email: 'rashmi.tiwari@example.com',
  },
  {
    name: 'Arjun Rajput',
    phoneNumber: '7654321093',
    address: '111 Street, Kochi, Kerala',
    email: 'arjun.rajput@example.com',
  },
  {
    name: 'Neha Sharma',
    phoneNumber: '6543210984',
    address: '222 Street, Dehradun, Uttarakhand',
    email: 'neha.sharma@example.com',
  },
  {
    name: 'Harish Verma',
    phoneNumber: '5432109875',
    address: '333 Street, Guwahati, Assam',
    email: 'harish.verma@example.com',
  },
  {
    name: 'Smita Kapoor',
    phoneNumber: '8765432103',
    address: '444 Street, Patna, Bihar',
    email: 'smita.kapoor@example.com',
  },
  {
    name: 'Prakash Patel',
    phoneNumber: '7654321094',
    address: '555 Street, Raipur, Chhattisgarh',
    email: 'prakash.patel@example.com',
  },
  {
    name: 'Aishwarya Nair',
    phoneNumber: '6543210985',
    address: '666 Street, Shimla, Himachal Pradesh',
    email: 'aishwarya.nair@example.com',
  },
  {
    name: 'Alok Yadav',
    phoneNumber: '5432109876',
    address: '777 Street, Jammu, Jammu and Kashmir',
    email: 'alok.yadav@example.com',
  },
];

function clickMe() {
  let table = document.createElement("table");
  table.className = "Main";

  // Creating table header
  let thead = document.createElement("thead");
  thead.className = "Main";

  let headerRow = document.createElement("tr");
  headerRow.className = "Sub";

  // Creating table headers
  let headers = ["Name", "Phone-Number", "Address", "Email","actoin"];
  headers.forEach(headerText => {
    let tableHead = document.createElement("th");
    tableHead.className = "tableHeadclass";
    tableHead.innerText = headerText;
    headerRow.appendChild(tableHead);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Creating table body
  let tbody = document.createElement("tbody");
  indianDummyArray.forEach(person => {
    let row = document.createElement("tr");
    // Creating table data cells
    let nameCell = document.createElement("td");
    nameCell.innerText = person.name;

    let phoneNumberCell = document.createElement("td");
    phoneNumberCell.innerText = person.phoneNumber;

    let addressCell = document.createElement("td");
    addressCell.innerText = person.address;

    let emailCell = document.createElement("td");
    emailCell.innerText = person.email;

   let actionCell=document.createElement("tr");
   

   let btn1=document.createElement("button");
   btn1.innerText="Edit";
   

   let btn2=document.createElement("button");
   btn2.innerText="Delete";
  
   

    // Appending cells to the row
    row.appendChild(nameCell);
    row.appendChild(phoneNumberCell);
    row.appendChild(addressCell);
    row.appendChild(emailCell);
    row.appendChild(actionCell);
    actionCell.appendChild(btn1);

   actionCell.appendChild(btn2);


    tbody.appendChild(row);
    
  });
  let inputRow = document.createElement("tr");

  for (let i = 0; i < headers.length-1; i++) {
    let inputCell = document.createElement("td");
    let inputBox = document.createElement("input");
    inputBox.type = "text";
    inputCell.appendChild(inputBox);
    inputRow.appendChild(inputCell);
  
  }
  // Creating a submit button under the action column
let actionCell = document.createElement("td");
let submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.type = "submit"; // If this is part of a form submission
actionCell.appendChild(submitButton);
inputRow.appendChild(actionCell);

  // Append the input row to the tbody
  tbody.appendChild(inputRow);
  table.appendChild(tbody);
  
  // Appending the table to the HTML body or any desired element
  
  document.body.appendChild(table);
  
  
}

