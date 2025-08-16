// Import the LinkedList implementation
import { MyLinkedList } from './linked-list';

// Test case data
const operations = [
  'MyLinkedList',
  'addAtHead',
  'addAtIndex',
  'addAtIndex',
  'addAtHead',
  'deleteAtIndex',
  'addAtIndex',
  'addAtHead',
  'addAtTail',
  'addAtHead',
  'get',
  'addAtTail',
  'addAtTail',
  'addAtIndex',
  'addAtTail',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'addAtIndex',
  'addAtHead',
  'deleteAtIndex',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtIndex',
  'addAtHead',
  'addAtTail',
  'addAtHead',
  'deleteAtIndex',
  'addAtTail',
  'deleteAtIndex',
  'addAtTail',
  'addAtTail',
  'addAtTail',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'get',
  'addAtIndex',
  'get',
  'deleteAtIndex',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'addAtTail',
  'addAtIndex',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'addAtTail',
  'deleteAtIndex',
  'deleteAtIndex',
  'addAtHead',
  'addAtHead',
  'addAtTail',
  'addAtHead',
  'get',
  'addAtIndex',
  'addAtIndex',
  'get',
  'addAtTail',
  'get',
  'addAtTail',
  'deleteAtIndex',
  'get',
  'addAtTail',
  'addAtTail',
  'addAtHead',
  'addAtTail',
  'deleteAtIndex',
  'addAtHead',
  'addAtHead',
  'addAtHead',
  'deleteAtIndex',
  'addAtTail',
  'addAtIndex',
  'addAtTail',
  'addAtTail',
  'addAtIndex',
  'addAtIndex',
  'addAtHead',
  'addAtIndex',
  'addAtHead',
  'addAtHead',
  'addAtTail',
  'addAtIndex',
  'addAtTail',
  'get',
  'addAtHead',
  'addAtTail',
  'addAtHead',
  'addAtHead',
];

const parameters = [
  [],
  [86],
  [1, 54],
  [1, 14],
  [83],
  [4],
  [3, 18],
  [46],
  [3],
  [76],
  [5],
  [79],
  [74],
  [7, 28],
  [68],
  [16],
  [82],
  [24],
  [30],
  [96],
  [21],
  [79],
  [66],
  [2],
  [2],
  [7, 57],
  [59],
  [21],
  [19],
  [55],
  [46],
  [17],
  [16, 41],
  [97],
  [85],
  [63],
  [30],
  [11],
  [16],
  [91],
  [29],
  [47],
  [20],
  [12],
  [80],
  [15],
  [12, 8],
  [21],
  [30],
  [11],
  [54],
  [51],
  [41],
  [8, 88],
  [62],
  [7],
  [59],
  [73],
  [73],
  [55],
  [9],
  [7],
  [49],
  [99],
  [17],
  [44],
  [11],
  [26, 86],
  [10, 99],
  [19],
  [71],
  [29],
  [32],
  [2],
  [3],
  [16],
  [2],
  [83],
  [31],
  [3],
  [23],
  [64],
  [96],
  [27],
  [81],
  [12, 78],
  [21],
  [69],
  [5, 35],
  [8, 72],
  [60],
  [19, 73],
  [55],
  [83],
  [86],
  [31, 70],
  [49],
  [19],
  [64],
  [22],
  [25],
  [13],
];

// Expected output
const expected = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  18,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  57,
  null,
  28,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  46,
  null,
  null,
  30,
  null,
  41,
  null,
  null,
  73,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  97,
  null,
  null,
  null,
  null,
];

function runTest() {
  let linkedList: MyLinkedList;
  const results: any[] = [];

  try {
    for (let i = 0; i < operations.length; i++) {
      const operation = operations[i];
      const params = parameters[i];

      console.log(`\nStep ${i}: ${operation}(${params.join(', ')})`);

      switch (operation) {
        case 'MyLinkedList':
          linkedList = new MyLinkedList();
          results.push(null);
          console.log('Created new LinkedList');
          break;

        case 'addAtHead':
          linkedList.addAtHead(params[0]);
          results.push(null);
          console.log(`Added ${params[0]} at head`);
          break;

        case 'addAtTail':
          linkedList.addAtTail(params[0]);
          results.push(null);
          console.log(`Added ${params[0]} at tail`);
          break;

        case 'addAtIndex':
          linkedList.addAtIndex(params[0], params[1]);
          results.push(null);
          console.log(`Added ${params[1]} at index ${params[0]}`);
          break;

        case 'deleteAtIndex':
          linkedList.deleteAtIndex(params[0]);
          results.push(null);
          console.log(`Deleted at index ${params[0]}`);
          break;

        case 'get':
          const result = linkedList.get(params[0]);
          results.push(result);
          console.log(`Get index ${params[0]} -> ${result}`);
          break;
      }

      // Print current state for debugging
      const currentState = [];
      let current = (linkedList as any).head;
      while (current) {
        currentState.push(current.val);
        current = current.next;
      }
      console.log(
        `Current list: [${currentState.join(', ')}], size: ${(linkedList as any).size}`,
      );
    }

    console.log('\n=== Final Results ===');
    console.log('Actual  :', results);
    console.log('Expected:', expected);

    // Compare results
    let mismatches = [];
    for (let i = 0; i < Math.max(results.length, expected.length); i++) {
      if (results[i] !== expected[i]) {
        mismatches.push({
          index: i,
          operation: operations[i],
          params: parameters[i],
          actual: results[i],
          expected: expected[i],
        });
      }
    }

    if (mismatches.length === 0) {
      console.log('\n✅ All tests passed!');
    } else {
      console.log(`\n❌ Found ${mismatches.length} mismatches:`);
      mismatches.forEach((m) => {
        console.log(
          `  Step ${m.index}: ${m.operation}(${m.params?.join(', ')}) -> Expected: ${m.expected}, Got: ${m.actual}`,
        );
      });
    }
  } catch (error) {
    console.error('Error during execution:', error);
    console.log('Results so far:', results);
  }
}

// Run the test
runTest();
