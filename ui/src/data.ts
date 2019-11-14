export const NOTES = [
    {
        id: 1,
        title: 'Note 1 Title',
        text: 'Note 1',
        tags: ['tag1', 'tag2', 'tag3'],
        author: 'user@test.com',
        createtime: new Date(),
        lastupdatetime: new Date()
    },
    {
        id: 2,
        title: 'Note 2 Title',
        text: 'Note 2',
        tags: ['tag1', 'tag2'],
        author: 'user@test.com',
        createtime: new Date(),
        lastupdatetime: new Date()
    },
    {
        id: 3,
        title: 'Note 3 Title',
        text: 'Note 3',
        tags: ['tag1', 'tag2'],
        author: 'user@test.com',
        createtime: new Date(),
        lastupdatetime: new Date()
    },
    {
        id: 4,
        title: 'Note 4 Title',
        text: 'Note 4',
        tags: ['tag1', 'tag2'],
        author: 'user@test.com',
        createtime: new Date(),
        lastupdatetime: new Date()
    }
  ];

export const TASKS = [
    {
        id: 0,
        author: 'user@test.com',
        tags: ['tag1', 'tag2'],
        title: 'Task 1',
        text: 'Go do task 1',
        relatedNotes: [],
        relatedEvents: [],
        createtime: new Date(),
        lastupdatetime: new Date(),
        duetime: new Date("2019-11-05T15:00:00-06:00"),
        complete: false,
        completetime: null
    }
];

export const EVENTS = [
    {
      id: 1,
      title: "Event 1",
      tags: ['event1', 'event2'],
      creator: 'user@test.com',
      createtime: new Date(),
      lastupdatetime: new Date(),
      starttime: new Date('2019-12-31T23:00:00-06:00'),
      endtime: new Date()
    }
  ];