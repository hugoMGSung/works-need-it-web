﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace TodoItemApp.Models
{
    public class TodoItem
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "Varchar(100)")]
        public string? Title { get; set; }

        // DateTime to string
        public string TodoDate { get; set; }
        // boolean to int
        public int IsComplete { get; set; }

    }
}
