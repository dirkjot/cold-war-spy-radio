# cold-war-spy-radio
Demo app for React

The idea is based on Bridge of Spies and all the Cold War books I read as a child:  As a foreign spy, I want to communicate with my home base but due to 1950' technology, I can send only three message:
- Send instructions:  I am waiting for you to drop the next assignment in the agreed upon dropbox. 
- Document in Dropbox:  I have completed the assignment and the requested documents are in the dropbox.
- Send more money:  Being a spy is not free and I need more cash. 

### Phase 1
The app will consist of three radio buttons with the labels above.  There is an `Encrypt` button which will copy the message selected by the radio into the `message out` area, but after encrypting it.  Encryption is done by replacing all letters `e` with `3`. 

At this point, my app is functional:  I can copy the encrypted text onto a piece of paper and send it in morse code on the agreed upon frequency with my secret spy radio. 

### Phase 2
Pressing the 'encrypt' button multiple times on the same message makes for stronger encryption.  There are three incremental levels: `e -> 3`, then `i -> 1`, finally `o -> x`.

