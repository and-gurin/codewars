function getParticipants(handshakes){
let people = 1;
    while( people*(people-1)/2 < handshakes ) people++;
    return people
}