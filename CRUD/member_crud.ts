import { members} from '../Crud_operations/insertionData';
//import { sequelize } from '../database';
import { Member } from '../models/members';

async function createMembers(): Promise<void> {
    try {
      await Member.bulkCreate(members);
      console.log(' inserted values into members table');
    } catch (err) {
      console.error('Error while inserting members:', err);
    }
}

async function addNewMember(name: string, address: string, phone_number: string, email: string): Promise<void> {
    try{
        const member = await Member.create({name: name, address: address,phone_number :phone_number, email: email});
        console.log('new member added');
        console.table(member.toJSON());
    }
    catch(error){
        console.error('Error while inserting new member');
    }
}

async function allMembers(): Promise<void> {
    try{
        const members=await Member.findAll();
        console.log('All Members retrieved successfully');
        const allMembers = members.map(a=> a.toJSON());
        console.table(allMembers);
    }
    catch(error){
        console.error('Error while retrieving members data');
    }
}

async function getMember(id : number) : Promise<void> {
    try {
        const member = await Member.findByPk(id);
        if(member)
          console.table(member.toJSON());
        else
         console.log('Member not found');
    }
    catch(error){
        console.error('Error while retrieving data');
    }
}
async function updateMember(id: number, update_details : any){
    try {
         const member = await Member.findByPk(id);
         if(member){
            const updatemember = await member.update(update_details);
            console.table(updatemember.toJSON());
         }
         else{
            console.log('Member not found');
         }
    }catch(error){
        console.error('Unable to retrieve the members data');
    }
}

async function deleteMember(id: number){
    try {
        const member = await Member.findByPk(id);
        if(member){
          await member.destroy();
          console.log('member deleted from table');}
        else{
            console.log('member not found');
        }
    }catch(error){
        console.error('Error while deleting the member data');
    }
} 

export {createMembers, addNewMember, allMembers, getMember, updateMember,deleteMember};



