import { defineSchema, defineTable } from "convex/server"; import { v } from "convex/values";
export default defineSchema({
    jobs: defineTable({ name: v.string(), schedule: v.string(), vaultId: v.id("vaults"), lastRun: v.string(), status: v.string(), sizeBytes: v.number() }).index("by_status", ["status"]),
    vaults: defineTable({ name: v.string(), type: v.string(), limitBytes: v.number(), usedBytes: v.number() }),
    logs: defineTable({ action: v.string(), user: v.string(), detail: v.string(), ts: v.string() }).index("by_ts", ["ts"])
});
