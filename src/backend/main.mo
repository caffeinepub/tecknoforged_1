import Map "mo:core/Map";
import Text "mo:core/Text";
import Time "mo:core/Time";
import List "mo:core/List";
import Array "mo:core/Array";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";

actor {
  let rfqs = List.empty<RFQ>();
  let contactMessages = List.empty<ContactMessage>();

  type RFQ = {
    companyName : Text;
    contactPerson : Text;
    phone : Text;
    email : Text;
    productType : Text;
    material : Text;
    grade : Text;
    quantity : Nat;
    quantityUnit : Text;
    deliveryTimeline : Text;
    specialRequirements : ?Text;
    requests : Nat;
    timestamp : Int;
  };

  type ContactMessage = {
    name : Text;
    phone : Text;
    contactMessage : Text;
    timestamp : Int;
  };

  type Boolean = {
    #True;
    #False;
  };

  // Access Control
  let admins = Map.singleton<Principal, Boolean>(Principal.fromText("2vxsx-fae"), #True);

  func isAdmin(p : Principal) : Bool {
    switch (admins.get(p)) {
      case (?#True) { true };
      case (_) { false };
    };
  };

  // Public API
  public shared ({ caller }) func submitRFQ(
    companyName : Text,
    contactPerson : Text,
    phone : Text,
    email : Text,
    productType : Text,
    material : Text,
    grade : Text,
    quantity : Nat,
    quantityUnit : Text,
    deliveryTimeline : Text,
    specialRequirements : ?Text,
  ) : async () {
    let newRFQ : RFQ = {
      companyName;
      contactPerson;
      phone;
      email;
      productType;
      material;
      grade;
      quantity;
      quantityUnit;
      deliveryTimeline;
      specialRequirements;
      requests = 0;
      timestamp = Time.now();
    };
    rfqs.add(newRFQ);
  };

  public shared ({ caller }) func submitContactMessage(name : Text, phone : Text, message : Text) : async () {
    let newMessage : ContactMessage = {
      name;
      phone;
      contactMessage = message; // Use contactMessage instead of message
      timestamp = Time.now();
    };
    contactMessages.add(newMessage);
  };

  // Get all RFQs (accessible only by admin)
  public shared ({ caller }) func getAllRFQs() : async [RFQ] {
    if (not isAdmin(caller)) { Runtime.trap("Admin access required") };
    rfqs.toArray();
  };

  // Get all contact messages (accessible only by admin)
  public shared ({ caller }) func getAllContactMessages() : async [ContactMessage] {
    if (not isAdmin(caller)) { Runtime.trap("Is Not An Admin") };
    contactMessages.toArray();
  };

  // Optional: Add admin (accessible only by existing admin)
  public shared ({ caller }) func addAdmin(newAdmin : Principal) : async () {
    if (not isAdmin(caller)) { Runtime.trap("Is Not An Admin") };
    admins.add(newAdmin, #True);
  };
};
