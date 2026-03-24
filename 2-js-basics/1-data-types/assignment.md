# Data Types Practice: E-commerce Shopping Cart

## Instructions

Imagine you are building a modern e-commerce shopping cart system. This assignment will help you understand how different JavaScript data types work together to create real-world applications.

### Your Task

Create a comprehensive analysis of how you would use JavaScript data types in a shopping cart application. For each of the seven primitive data types and objects, you need to:

1. **Identify** the data type and its purpose
2. **Explain** why this data type is the best choice for specific shopping cart features
3. **Provide** realistic code examples showing the data type in action
4. **Describe** how this data type interacts with other parts of the shopping cart

### Required Data Types to Cover

**Primitive Data Types:**

- **String**: Product names, descriptions, user information
- **Number**: Prices, quantities, tax calculations
- **Boolean**: Item availability, user preferences, cart status
- **Null**: Intentionally empty values (like missing discount codes)
- **Undefined**: Uninitialized values or missing data
- **Symbol**: Unique identifiers (advanced use)
- **BigInt**: Large financial calculations (advanced use)

**Reference Types:**

- **Object**: Product details, user profiles, cart contents
- **Array**: List of products, order history, categories

### Example Format for Each Data Type

For each data type, structure your response like this:

````markdown
## [Data Type Name]

**Purpose in Shopping Cart:** [Explain what this data type does]

**Why This Type:** [Explain why this is the best choice]

**Code Example:**

```javascript
// Your realistic code example here
```

**Real-world Usage:** [Describe how this would work in practice]

**Interactions:** [Explain how this data type works with others]
````

### Bonus Challenges

1. **Type Coercion**: Show an example where JavaScript automatically converts between data types in your shopping cart (e.g., string "5" + number 10)

2. **Data Validation**: Demonstrate how you would check if user input is the correct data type before processing

3. **Performance Considerations**: Explain when you might choose one data type over another for performance reasons

### Submission Guidelines

- Create a markdown document with clear headings for each data type
- Include working JavaScript code examples
- Use realistic e-commerce scenarios in your examples
- Explain your reasoning clearly for beginners to understand
- Test your code examples to ensure they work correctly

## Rubric

| Criteria | Exemplary (90-100%) | Proficient (80-89%) | Developing (70-79%) | Needs Improvement (Below 70%) |
| ---------- | --------------------- | --------------------- | --------------------- | ------------------------------ |
| **Data Type Coverage** | All 7 primitive types and objects/arrays covered with detailed explanations | 6-7 data types covered with good explanations | 4-5 data types covered with basic explanations | Fewer than 4 data types or minimal explanations |
| **Code Examples** | All examples are realistic, working, and well-commented | Most examples work and are relevant to e-commerce | Some examples work but may be generic | Code examples are incomplete or non-functional |
| **Real-world Application** | Clearly connects each data type to practical shopping cart features | Good connection to e-commerce scenarios | Some connection to shopping cart context | Limited real-world application demonstrated |
| **Technical Accuracy** | All technical information is correct and demonstrates deep understanding | Most technical information is accurate | Generally accurate with minor errors | Contains significant technical errors |
| **Communication** | Explanations are clear, beginner-friendly, and well-organized | Good explanations that are mostly clear | Explanations are understandable but may lack clarity | Explanations are unclear or poorly organized |
| **Bonus Elements** | Includes multiple bonus challenges with excellent execution | Includes one or more bonus challenges well done | Attempts bonus challenges with mixed success | No bonus challenges attempted |

### Learning Objectives

By completing this assignment, you will:

- ✅ **Understand** the seven JavaScript primitive data types and their uses
- ✅ **Apply** data types to real-world programming scenarios
- ✅ **Analyze** when to choose specific data types for different purposes
- ✅ **Create** working code examples that demonstrate data type usage
- ✅ **Explain** technical concepts in beginner-friendly language
- ✅ **Connect** fundamental programming concepts to practical applications

## Submission

## String

**Purpose in Shopping Cart:**  The purpose of strings in a shopping cart is to represent textual data such as product names, descriptions, and user information.

**Why This Type:** Strings are the best choice for this type of data because they can be easily stored and manipulated as text. Strings allow for concatenation, formatting, and are essential for displaying information to users.

**Code Example:**

```javascript
const brandName = "Google";
const productName = "Chromebook";
const fullProductName = `${brandName} ${productName}`;
console.log(fullProductName); // Output: "Google Chromebook"
```

## Number

**Purpose in Shopping Cart:** The purpose of numbers in a shopping cart is to represent numerical data such as prices, quantities, and tax calculations. Numbers allow for mathematical operations, which are essential for numerical data processing.

**Why This Type:** Numbers are the best choice for this type of data because they can be used in calculations, comparisons, and any operations that require math.

**Code Example:**

```javascript
let productOnePrice = 5.99;
let productTwoPrice = 6.99;
let totalCost = productOnePrice + productTwoPrice;
console.log(totalCost); // Output: 12.98
```

## Boolean

**Purpose in Shopping Cart:** The purpose of booleans in a shopping cart is to represent true/false values such as item availability, user preferences, and cart status. Booleans are essential for decision-making processes.

**Why This Type:** Booleans are the best choice for this type of data because they can be easily used in conditional statements to control the flow of the shopping cart logic. Booleans help determine which actions to take based on user input/system status.

**Code Example:**

```javascript
let isItemInStock = true;
if (isItemInStock) {
  console.log("The item is available for purchase.");
} else {
  console.log("The item is out of stock.");
}
```

## Null

**Purpose in Shopping Cart:** The purpose of the null data type in a shopping cart is to represent empty values such as missing discount codes.

**Why This Type:** Null is the best choice for this type of data because it intentionally represents the absence of any value. It is a clear way to indicate no value or missing data.

**Code Example:**

```javascript
let discountCode = null; // No discount code
if (discountCode === null) {
  console.log("No discount code applied.");
} else {
  console.log(`Discount code ${discountCode} applied.`);
}
```

## Undefined

**Purpose in Shopping Cart:** The purpose of the undefined data type in a shopping cart is to represent uninitialized values or missing data, such as a user not entering shipping information.

**Why This Type:** Undefined is the best choice for this type of data because we know the user is required to enter data. Undefined indicates that the value has not been set, which can be helpful for validation and error handling.

**Code Example:**

```javascript
let shippingAddress;
if (shippingAddress === null) {
  console.log("Missing shipping address");
} else {
  console.log(`Shipping to ${shippingAddress}`)
}
```

## Symbol

**Purpose in Shopping Cart:** The purpose of symbols in a shopping cart is represent unique identifiers such as product IDs, order IDs, or user IDs. Symbols can be used to create unique keys for objects, ensuring no conflicts with other keys.

**Why This Type:** Symbols are the best choice for this date because they provide a way to create unique identifiers that cannot be overwritten or accessed accidentally. This is useful in a shopping cart to ensure each product or user has a unique identifier.

**Code Example:**

```javascript
const productID = Symbol("productID");
const product = {
  name: "Laptop",
  ID: productID,
  price: 599.99
};
```

## BigInt

**Purpose in Shopping Cart:** The purpose of BigInt in a shopping cart is to present large monetary values or large quantities that may exceed the limits of the Number data type, such as total sale or large inventory counts.

**Why This Type:** BigInt is the best choice for this type of data  because it can handle large integers that exceed the maximum limit of the Number data type. This is useful for financial calculation that may involve large sums of money.

**Code Example:**

```javascript
const totalSales = BigInt("9007199254740991") + BigInt("1000000000000000");
console.log(totalSales); // Output: 10000000000000000n
```
