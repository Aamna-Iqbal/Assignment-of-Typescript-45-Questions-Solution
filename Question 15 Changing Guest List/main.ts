let guest_list:string[]=['Ayesha', 'Fatima', 'Maryam', 'Kinza', 'Hira', 'Anaya','Aliza'];
for(let i=0; i<guest_list.length;i++){
console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!')
}
let guest_absent:string='Kinza';
let new_guest :string='Areeba';
guest_list[3]=new_guest;
for(let i=0; i<guest_list.length;i++){
console.log('Dear Friend ' + guest_list[i] + ',\nWe are having a dinner party and it wiil be delighted for us if you could join us.\n\nThank You!')
}
console.log(`Miss ${guest_absent} will not come in dinner party.` )