# free-scada
For FREE SCADA development without headaches.

## Philosophy
### Architecture: Decentralized, local-first
Aquisition should be done locally first, to prevent data loss and make the system modular. By decentralizing the 
system, a failure will not be spreaded across the whole system, making easier to repair the issues and focus the 
time and effort where they are needed, instead of wasting them in finding the errors.

### Modelling: Model once, extend everywhere
A transformer does the same everywere. A motor does the same everywhere. They can be modeled once and extended when 
needed. Adopting a standard is crucial for mantainning certain retrocompatibility, so the system can be mantained 
easily without much effort. If the device is too complex, it can be broken down into simpler devices that, again, 
can be modelled once and extended when needed.

### Integrations: Even the protocols can be modeled
Even if we wire things via Ethernet RJ-45 or Serial Port RS-232, a bunch of bits are still a bunch of bits, nothing 
more than that. A protocol is just a set of rules that tells to every part in the communication what those bits aims 
to communicate. Following the design philosophy of "model once, extend everywhere", a device model should be extended 
with a protocol, breaking the limitations of the traditional modelling by adopting a composition/inheritance approach.

### Security: The system stands up against everything
Accidents and disasters are always a real risk. Even though, the system should keep the data safe at every moment 
no matter what. The system aims to restrict the access to the data by applying an access level system.

### User Experience: Automation-first
The system aims to generate the user interface with the data contained in the model automatically. No UI dessign is 
needed to be done by hand. Only the most specific modifications are allowed to be done, following the modelling 
philosophy.

### License: FREE!
What does a FREE SCADA means? It means to be fully documented, easily adaptable to fit the needs of every user and 
fully transparent in its development. No more.

## CONTRIBUTING
See the [CONTRIBUTING guide](./CONTRIBUTING.md) to know how to collaborate with the project.
